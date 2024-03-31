

let Guest_List :string[] = ['Imran Khan','Kamran Khan ','Hafiz Naeem-ur-Rehman'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to  invite you in our party.\n\nThank you!')
    
}

let absent_Guest :string = 'Asif Zardari';

let new_Guest :string = 'Nawaz Sharif';

Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length ; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
    
}

console.log(`Mr. ${absent_Guest} is not coming the party.`)