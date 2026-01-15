import { client as hs } from "../index.js";

async function testFunction() {
  try {
    const response = await hs.contacts.getAllContacts([], 100);
    console.log("Contact length", response.length);
    console.log("Conatct sample:", response[0]);

    // const hardware = hs.customObject("2-53204310");

    // const allHardware = await hardware.fetchAll();

    // console.log("Hardware sample:", Array.isArray(allHardware), allHardware[0]);
    // let after = 0;
    // let allHardware = [];

    // do {
    //   const getHardware = await hardware.search({ after });
    //   allHardware.push(...getHardware.results);

    //   console.log(`Fetched ${allHardware.length} hardware`);

    //   if (getHardware?.paging?.next?.after) {
    //     after = getHardware?.paging?.next?.after;
    //   } else {
    //     after = false;
    //   }
    // } while (after);

    // console.log("hardware : ", allHardware.length);

    // console.log(response.data.results[0]);
    // console.log(response);
    // let after = null;
    // let allContacts = [];
    // while (true) {
    //   const res = await hs.deals.searchDeals([], [], 100, after);
    //   const response = res.results || [];
    //   allContacts.push(...response);
    //   console.log(`Fetched ${response.length} deals`);
    //   console.log;
    //   const next = res.paging?.next?.after;
    //   if (!next) break; // No more pages
    //   after = next;
    // }
    // console.log(`Total deals: ${allContacts.length}`);
  } catch (error) {
    console.error("Error in testFunction:", error);
  }
}

export { testFunction };
