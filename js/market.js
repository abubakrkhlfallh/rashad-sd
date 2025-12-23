const sb = window.supabaseClient;

async function loadMarket() {
  const { data } = await sb
    .from("market_listings")
    .select("*")
    .order("created_at", { ascending: false });

  const container = document.getElementById("market");
  container.innerHTML = "";

  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h4>${item.crop_name}</h4>
        <p>الكمية: ${item.quantity}</p>
        <p>السعر: ${item.price}</p>
        <p>الولاية: ${item.state}</p>
        <button onclick="startChat('${item.farmer_id}')">شراء</button>
      </div>
    `;
  });
}

function startChat(userId) {
  localStorage.setItem("chatWith", userId);
  location.href = "chat.html";
}

loadMarket();
