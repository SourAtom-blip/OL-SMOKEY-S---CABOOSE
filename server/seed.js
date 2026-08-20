import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "./models/MenuItem.js";

dotenv.config();

const items = [
  // Signature Steak Sandwiches
  { name: "Sirloin Philly Cheesesteak", description: "Shaved sirloin, grilled peppers, onions, melted provolone on a toasted hoagie.", price: "$20.70", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV29rZbG0kAXt2jhKZvmFBbGGL0DHWVJmtjFwQYgshxCV_Tx3clILqmLdY27Gp4_Zvo96mfJpcwFDUOC3R-D_7PSAVpWHg44AIq8msp2IusfSsixvc9srwYhduXiw7iCDIup-35WwHPZBMlGZVOJSV1jSB2Oy_oeu86dl9tyyQcQLScL_BXJGS2PMsIISMLOU5Xd36RrqiCSzGw8oO1zVfM39U1XeVvllq435Zv-DbhaLpviNLysYPyg", category: "sandwiches", section: "Signature Steak Sandwiches", order: 1 },
  { name: "Tri-Tip", description: "Smoked sliced tri-tip, house BBQ sauce, crispy onions on an artisan bun.", price: "$23.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd5rFnEXbiCp6Tt-UzF-eY7wM7yZ4eCv2krWIMSA3evH20ws9SEMAguDxSDY4USoXi5hxTQI6IjGfmwdTil6xP6-ZVEbDFzMj2g43M7LevBeBX0CocY30o_snBBKuFnkUrNAX97a6WKGqEeLYUyvWOHEWj8FOZxrG_tRSkAITrK3PeOrGB4VrCHK4a266sQHRGLw6pIdR-A91StBnh-b5EcMsPh0cQWD1afeOKLHNhDjnRxuH_iy8Ztw", category: "sandwiches", section: "Signature Steak Sandwiches", badge: "Pitmaster Choice", order: 2 },
  { name: "Cold Tri-Tip", description: "Thinly sliced chilled tri-tip, horseradish aioli, arugula on sourdough.", price: "MP", image: "", category: "sandwiches", section: "Signature Steak Sandwiches", order: 3 },
  // Burgers
  { name: "Western Burger", description: "Bacon, cheddar, onion rings, BBQ sauce.", price: "$20.00", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVW5gdiCwxlMpM55ytwQh99oMXGFGPbF-XVqsBd1a5cReGKbDXtaISeodSvq9tAUI24lQFSEV-LirK-AC6r-SjSBzDeyI-jFFPuTdPSUz2eKveGp99DsiZ6BuXr1uml0dnXDZ7Q89PxZKeruw7MbRCdj5DhRpX5yLw6wbvJs_VgemM8VjkeK-f693g1tY6LWbhBU4sBCpKl5ALCVu970xFv_mMT_RiULIpH8sm1Bp8FbGjjI9F8m9sgQ", category: "burgers", section: "Burgers (1/3 lb)", order: 1 },
  { name: "All American", description: "Lettuce, tomato, onion, pickles, american cheese.", price: "MP", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXniEoG8ZtxZZ_GZ90SFTok2jKOMoaVJlolIKlkc-Hx3In1sDjHWAbO0Hdd8zDjVgQ8175hndwr6VeXxCD5YHVqLiQE15qChmQ8W_Q9ubdxbOAxIJGr6Kqk51zpJ4l5eSiAtVaoeY-gLrk2hbwm_-bF3REo1kgTX0bkBzqV371i9u-VmIqQijrhu1oPFVXr7mlohqNDtcxAQVhZQiOOnRFgHQTaJsQJWTj-0gbFLyMSmr8h_qUWZI0OA", category: "burgers", section: "Burgers (1/3 lb)", order: 2 },
  { name: "Smash Burger", description: "Double smashed patties, grilled onions, special sauce.", price: "$18.40", image: "", category: "burgers", section: "Burgers (1/3 lb)", order: 3 },
  { name: "Bacon Burger", description: "Thick-cut bacon, cheddar, lettuce, tomato.", price: "$20.70", image: "", category: "burgers", section: "Burgers (1/3 lb)", order: 4 },
  // Chicken
  { name: "Chicken Club", description: "", price: "$20.70", image: "", category: "chicken", section: "Chicken", order: 1 },
  { name: "Chicken Tenders Basket", description: "", price: "$18.40", image: "", category: "chicken", section: "Chicken", order: 2 },
  // Hot Dogs
  { name: "All Beef", description: "", price: "MP", image: "", category: "hotdogs", section: "1/4lb Hot Dogs", order: 1 },
  { name: "Hot Link", description: "", price: "MP", image: "", category: "hotdogs", section: "1/4lb Hot Dogs", order: 2 },
  // Sides
  { name: "French Fries", description: "", price: "$6.90", image: "", category: "sides", section: "Sides", order: 1 },
  { name: "Garlic Fries", description: "", price: "$8.05", image: "", category: "sides", section: "Sides", order: 2 },
  { name: "Onion Rings", description: "", price: "$9.20", image: "", category: "sides", section: "Sides", order: 3 },
  // Sweets
  { name: "Milkshakes", description: "", price: "$10.00", image: "", category: "sweets", section: "Sweet Treats", order: 1 },
  { name: "Hawaiian Shaved Ice", description: "", price: "$8.05", image: "", category: "sweets", section: "Sweet Treats", order: 2 },
  // Beverages
  { name: "Root Beer", description: "", price: "", image: "", category: "beverages", section: "Beverages", order: 1 },
  { name: "Sarsaparilla", description: "", price: "", image: "", category: "beverages", section: "Beverages", order: 2 }
];

dotenv.config();

async function seed() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smokeys";
  await mongoose.connect(uri);
  await MenuItem.deleteMany({});
  await MenuItem.insertMany(items);
  console.log(`Seeded ${items.length} menu items`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
