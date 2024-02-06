let queue = [];
const maxQueueSize = 10;

document.getElementById("enqueueBtn").addEventListener("click", () => {
  if (queue.length < maxQueueSize) {
    const customerNumber = document.getElementById("customerNumber").value;
    const customerName = document.getElementById("customerName").value;

    if (customerNumber && customerName) {
      const customer = {
        number: customerNumber,
        name: customerName
      };

      queue.push(customer);
      document.getElementById("customerNumber").value = ""; // Clear the input
      document.getElementById("customerName").value = ""; // Clear the input
      updateQueueDisplay();
    }
  } else {
    alert("Queue is full. Cannot add more customers.");
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  if (queue.length > 0) {
    const nextCustomer = queue.shift();
    alert("ถึงคิวคุณแล้ว: " + nextCustomer.name);
    displaySMSNotification(nextCustomer.number, nextCustomer.name);
    updateQueueDisplay();
  } else {
    alert("No more customers in the queue.");
  }
});

function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = "<h3>Queue</h3>";
  queue.forEach((customer, index) => {
    queueList.innerHTML += `<p>${index + 1}. ${customer.name} - ${customer.number}</p>`;
  });
}

function displaySMSNotification(customerNumber, customerName) {
  const smsNotifications = document.getElementById("smsNotifications");
  smsNotifications.innerHTML = `<p>SMS sent to ${customerName} (${customerNumber}): Your table is ready. Please proceed to the counter.</p>`;
  setTimeout(() => {
    smsNotifications.innerHTML = ""; // Clear SMS notification after a few seconds
  }, 5000); // Adjust the time (in milliseconds) based on your preference
}
