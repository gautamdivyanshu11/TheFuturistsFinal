/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

// ------------------------------------------------    send amount

 // Set up Web3.js
 let web3;

 async function init() {
   // Check for MetaMask installation
   if (typeof window.ethereum === 'undefined') {
     alert('MetaMask not found. Please install it.');
     return;
   }

   // Connect to MetaMask
   try {
     await window.ethereum.request({ method: 'eth_requestAccounts' });
     console.log('Connected to MetaMask');
     web3 = new Web3(window.ethereum);
   } catch (error) {
     console.log(error);
     alert('You need to connect to MetaMask to use this app');
     return;
   }

   // Get the user's account
   let userAccount;
   web3.eth.getAccounts().then(accounts => {
     userAccount = accounts[0];
     console.log('User account:', userAccount);
   });

   // Handle form submission
   const form = document.getElementById('transfer-form');
   form.addEventListener('submit', async (event) => {
     event.preventDefault();

     // Get the recipient and amount from the form
     const recipient = document.getElementById('recipient').value;
     const amount = document.getElementById('amount').value;

     // Convert the amount to Wei (the smallest unit of Ethereum)
     const amountWei = web3.utils.toWei(amount, 'ether');

     try {
       // Send the transaction
       await web3.eth.sendTransaction({
         from: userAccount,
         to: recipient,
         value: amountWei,
       });

       // Display a success message
       alert(`Successfully sent ${amount} Ether to ${recipient}!`);
     } catch (error) {
       // Display an error message
       alert(`Error sending transaction: ${error.message}`);
     }
   });
 }

 // Attach click event to connect button
 const connectButton = document.getElementById('connect-button');
 connectButton.addEventListener('click', init);


//-----------------------------------       c
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}




