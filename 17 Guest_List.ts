
let Guest_List :string[] = ['Imran Khan','Kamran Khan ','Hafiz Naeem-ur-Rehman'];
// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to  invite you in ou

// }
let absent_Guest :string = 'Asif Zardari';
let new_Guest :string = 'Nawaz Sharif';
Guest_List[0] = new_Guest;

// for(let i=0; i<Guest_List.length ; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming the party.`);
console.log('Good News! We Find Big Table so we are inviting 3 more guests.')

// array mein 3 guest add kiya hn.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

// yahan par mene 6 guest ke array ko print kraya h.
for(let i=0; i<Guest_List.length ; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
}

// sorry messege to guest for not inviting.
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
// yahan par mene guest remove kiya hn
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invoied for Dinner.`);
}
// Hamare bache hoa 2 invited guest.
for(let i=0; i<Guest_List.length ; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You\n\n')
}

//mene saray guest array se remove kar diye.
Guest_List.splice(0 , 2);

console.log(Guest_List);