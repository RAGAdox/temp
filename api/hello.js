export const config = {
  runtime: "edge",
};

export default function handler( request ) {
  return new Response( JSON.stringify( { message: 'hello' } ) )
}