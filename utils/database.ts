import "dotenv";
import { supabaseClient, supabaseTable, supabaseTableItems } from "supabase";



const sbclient = new supabaseClient(
    Deno.env.get("SUPABASE_API_URL"),
    Deno.env.get("SUPABASE_ANON_KEY")   
);

const sbTableItems = new supabaseTableItems(sbclient, "logos");


console.log(await sbTableItems.get('b2b_domain', '740esquire.com'));

export default (await sbTableItems.all());