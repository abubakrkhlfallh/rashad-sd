const sb = window.supabaseClient;
let chatId;

async function initChat() {
  const { data: user } = await sb.auth.getUser();
  const otherId = localStorage.getItem("chatWith");

  const { data: chat } = await sb
    .from("chats")
    .insert({
      user_one: user.user.id,
      user_two: otherId
    })
    .select()
    .single();

  chatId = chat.id;
  loadMessages();
}

async function loadMessages() {
  const { data } = await sb
    .from("messages")
    .select("*")
    .eq("chat_id", chatId);

  const box = document.getElementById("messages");
  box.innerHTML = "";
  data.forEach(m => box.innerHTML += `<p>${m.content}</p>`);
}

async function sendMessage() {
  const { data: user } = await sb.auth.getUser();

  await sb.from("messages").insert({
    chat_id: chatId,
    sender_id: user.user.id,
    content: msg.value
  });
  msg.value = "";
  loadMessages();
}

initChat();
