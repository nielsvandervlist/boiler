import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        // Create Stripe Connect account
        const account = await stripe.accounts.create({
            type: 'express',
        });

        // Generate account link for user onboarding
        const accountLink = await stripe.accountLinks.create({
            account: account.id,
            refresh_url: 'http://localhost:3000/reauth',
            return_url: 'http://localhost:3000/profile',
            type: 'account_onboarding',
        });

        return new Response(JSON.stringify({ url: accountLink.url }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
