import "dotenv";
import { supabaseClient, supabaseTable, supabaseTableItems } from "supabase";

const sbclient = new supabaseClient(
    "https://xlrlffigpvvuhrfvqoxm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscmxmZmlncHZ2dWhyZnZxb3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAzNDUzMTQsImV4cCI6MTk3NTkyMTMxNH0.A1mV9suLGPExpkWka_S-EA9ZccNszqjmZWeLIbWBsvE"
);

const sbTableItems = new supabaseTableItems(sbclient, "logos");

console.log(await sbTableItems.all());