export default function CarForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    const data = new URLSearchParams(formData);
    console.log("Hi formData!", formData);

    const res = await fetch("/api/cars", {
      body: JSON.stringify({ make: "s", model: "sd" }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    console.log(res);

    const result = await res.json();
    console.table("Hi fetch!", result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" type="text" />
      <input name="model" type="text" />
      <button type="submit"> SUb </button>
    </form>
  );
}
