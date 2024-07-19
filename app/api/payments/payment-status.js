import { NextApiRequest, NextApiResponse } from 'next';
import mollieClient from '.@/lib/mollie';

export default async function handler(req, res) {
    const { paymentId } = req.query;

    if (!paymentId || typeof paymentId !== 'string') {
        return res.status(400).json({ error: 'Invalid payment ID' });
    }

    try {
        const payment = await mollieClient.payments.get(paymentId);
        res.status(200).json({ status: payment.status });
    } catch (error) {
        res.status(500).json({ error: (error).message });
    }
}