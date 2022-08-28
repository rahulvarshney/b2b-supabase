/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import type { LogoView } from "@/utils/types.ts";
//import * as database from "@/utils/types.ts";
import "dotenv";
import { supabaseClient, supabaseTable, supabaseTableItems } from "supabase";



/*const sbclient = new supabaseClient(
    Deno.env.get("SUPABASE_API_URL"),
    Deno.env.get("SUPABASE_ANON_KEY")   
);

const sbTableItems = new supabaseTableItems(sbclient, "logos");

const sbItemTest = await sbTableItems.get('b2b_domain', '740esquire.com');

console.log( sbItemTest );*/




export default function Home( ) {

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh. 0-0-2

      </p>
      <Counter start={3} />
    </div>
  );
}
