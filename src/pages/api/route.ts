export async function GET(request: Request) {
    return new Response(
        JSON.stringify({
            name: 'john',
        }),
        {
            status: 200,
        }
    );
}
