import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields.");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name..."
          className="input input-bordered mb-3 w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Description..."
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL..."
          className="input input-bordered mb-3 w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price..."
          className="input input-bordered mb-3 w-full"
          required
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
