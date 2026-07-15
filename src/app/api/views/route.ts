import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Missing Supabase environment variables");
  }
  return createClient(url, key);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "home";

  const supabase = getSupabase();
  const { data } = await supabase
    .from("views")
    .select("count")
    .eq("slug", slug)
    .single();

  return Response.json({ slug, count: data?.count ?? 0 });
}

export async function POST(request: Request) {
  const { slug } = await request.json();
  const key = slug || "home";

  const supabase = getSupabase();

  const { data: existing } = await supabase
    .from("views")
    .select("count")
    .eq("slug", key)
    .single();

  if (existing) {
    await supabase
      .from("views")
      .update({ count: existing.count + 1 })
      .eq("slug", key);
  } else {
    await supabase.from("views").insert({ slug: key, count: 1 });
  }

  return Response.json({ slug: key, count: (existing?.count ?? 0) + 1 });
}
