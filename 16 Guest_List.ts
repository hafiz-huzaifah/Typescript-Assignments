

let Guest_List :string[] = ['Imran Khan','Kamran Khan ','Hafiz Naeem-ur-Rehman'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to  invite you in our party.\n\nThank you!')
    
// }

let absent_Guest :string = 'Asif Zardari';

let new_Guest :string = 'Nawaz Sharif';

Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length ; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
    
}

console.log(`Mr. ${absent_Guest} is not coming the party.`);

console.log('Good News! We Find Big Table so we are inviting 3 more guests.')

Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

for(let i=0; i<Guest_List.length ; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
    
}