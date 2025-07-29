import fs from 'fs';
import path from 'path';

export async function POST(request) {
  
  const { slug, components } = await request.json();
  if (!slug || !Array.isArray(components)) {
    return new Response('Invalid data', { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'data', 'pages.json');
  let pages = [];

  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    pages = JSON.parse(data);
  } catch (err) {
    pages = [];
  }

  if (pages.find(p => p.slug === slug)) {
    return new Response('Slug already exists', { status: 400 });
  }

  pages.push({ slug, components });
  await fs.promises.writeFile(filePath, JSON.stringify(pages, null, 2));

  return new Response(
    JSON.stringify({ message: 'Page created', path: `/${slug}` }),
    { status: 201, headers: { 'Content-Type': 'application/json' } }
  );
}

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'pages.json');
  let pages = [];
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    pages = JSON.parse(data);
  } catch (err) {
    pages = [];
  }
  return new Response(
    JSON.stringify(pages),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
} 