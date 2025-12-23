const sb = window.supabaseClient;

async function signUp() {
  const email = email.value;
  const password = password.value;
  const role = role.value;

  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) return alert(error.message);

  await sb.from("profiles").insert({
    id: data.user.id,
    role: role
  });

  location.href = "dashboard.html";
}

async function signIn() {
  const { error } = await sb.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });
  if (error) return alert(error.message);

  location.href = "dashboard.html";
}
