const zaeemApi = "https://jsonplaceholder.typicode.com/posts";
const zaeemTable = document.getElementById("tableBody");
const zaeemMsg = document.getElementById("statusMessage");
const zaeemBtn = document.getElementById("refreshButton");

async function zaeemShowPosts() 
{
  zaeemMsg.textContent = "Loading posts...";
  zaeemTable.innerHTML = "";

  try {
    const zaeemResponse = await fetch(zaeemApi);

    if (!zaeemResponse.ok) 
    {
      throw new Error("Failed to fetch data");
    }

    const zaeemPosts = await zaeemResponse.json();
    zaeemMsg.textContent = "";

    for (let zaeemPost of zaeemPosts) 
    {
      const zaeemRow = document.createElement("tr");

      const zaeemTitle = document.createElement("td");
      zaeemTitle.textContent = zaeemPost.title;

      const zaeemBody = document.createElement("td");
      let zaeemBodyText = zaeemPost.body;

      if (zaeemBodyText.length > 100) 
      {
        zaeemBodyText = zaeemBodyText.slice(0, 100) + "...";
      }

      zaeemBody.textContent = zaeemBodyText;

      const zaeemUser = document.createElement("td");
      zaeemUser.textContent = zaeemPost.userId;

      zaeemRow.append(zaeemTitle, zaeemBody, zaeemUser);
      zaeemTable.appendChild(zaeemRow);
    }

  } 
  
  catch (zaeemError) 
 {
    zaeemMsg.textContent = "Failed to fetch posts";
    console.log("Error:", zaeemError);
  }

}

zaeemBtn.addEventListener("click", zaeemShowPosts);
zaeemShowPosts();
