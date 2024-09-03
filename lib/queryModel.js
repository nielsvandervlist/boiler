// lib/queryModel.js
import { NextResponse } from 'next/server';

export async function queryModel(Model, searchParams) {
    try {
        const query = {};

        // Dynamically build the query object based on search parameters
        searchParams.forEach((value, key) => {
            query[key] = value;
        });

        let results;
        if (Object.keys(query).length > 0) {
            // If any query parameters are provided, use them to filter documents
            results = await Model.find(query);
            if (results.length === 0) {
                return NextResponse.json({ message: 'No records found' }, { status: 404 });
            }
        } else {
            // If no query parameters are provided, return all documents
            results = await Model.find({});
        }

        return NextResponse.json(results, { status: 200 });
    } catch (error) {
        console.error('Failed to fetch records:', error);
        return NextResponse.json({ message: 'Unable to fetch records' }, { status: 500 });
    }
}
