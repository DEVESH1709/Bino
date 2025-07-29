// setup-demo-pages.js
import fs from 'fs';
import path from 'path';

const demoPages = [
  {
    slug: "welcome",
    components: [
      {
        type: "TextSection",
        props: {
          title: "Welcome to Our Platform",
          content: "This is a dynamically generated page showcasing our component system. You can create pages like this using our API endpoint."
        }
      },
      {
        type: "ImageBlock",
        props: {
          src: "https://sp.yimg.com/ib/th/id/OIP.1gz6xJgY9mtSy5dR_27s3wHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
          alt: "Welcome Image"
        }
      },
      {
        type: "StatsBox",
        props: {
          value: "100+",
          label: "Pages Created"
        }
      },
      {
        type: "Card",
        props: {
          title: "Feature Highlight",
          text: "Our platform allows you to create dynamic pages with reusable components. Each component can be customized with different props.",
          url: "#",
          imageSrc: "https://sp.yimg.com/ib/th/id/OIP.1gz6xJgY9mtSy5dR_27s3wHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
        }
      },
      {
        type: "CTA",
        props: {
          text: "Create Your Own Page",
          url: "/api/pages"
        }
      }
    ]
  },
  {
    slug: "features",
    components: [
      {
        type: "TextSection",
        props: {
          title: "Platform Features",
          content: "Discover the powerful features that make our platform stand out. From dynamic page creation to reusable components, we've got everything you need."
        }
      },
      {
        type: "StatsBox",
        props: {
          value: "5",
          label: "Component Types"
        }
      },
      {
        type: "Card",
        props: {
          title: "Dynamic Routing",
          text: "Create pages on-demand with our API. Each page gets its own unique URL and can be accessed immediately after creation.",
          url: "#",
          imageSrc: "https://sp.yimg.com/ib/th/id/OIP.1gz6xJgY9mtSy5dR_27s3wHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
        }
      },
      {
        type: "ImageBlock",
        props: {
          src: "https://sp.yimg.com/ib/th/id/OIP.1gz6xJgY9mtSy5dR_27s3wHaHa?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
          alt: "Features Overview"
        }
      },
      {
        type: "CTA",
        props: {
          text: "Try It Now",
          url: "/api/pages"
        }
      }
    ]
  }
];

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write demo pages to pages.json
const filePath = path.join(dataDir, 'pages.json');
fs.writeFileSync(filePath, JSON.stringify(demoPages, null, 2));

console.log('Demo pages created successfully!');
console.log('Pages available at:');
demoPages.forEach(page => {
  console.log(`- /${page.slug}`);
}); 