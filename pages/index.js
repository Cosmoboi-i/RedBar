import Link from "next/link";
import CarForm from "../lib/CarForm";
export default function IndexPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    console.table(formData);
  };

  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>Abot</a>
      </Link>
      <CarForm />
    </div>
  );
}
