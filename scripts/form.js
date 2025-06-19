
  const form = document.getElementById('myForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const response = await fetch("https://formspree.io/f/mblygybk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('There was an error submitting the form.');
    }
  });