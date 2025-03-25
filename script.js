var list = document.getElementById("list");
var genreList = document.getElementById("genres");
var sortButton = document.getElementById("sort");
var genres = ["All", "Jazz", "Metal", "Pop", "Punk", "Rock", "Other"];
var header = ["Artist", "Title", "Timer", "Genre", "Link"]

var collection = [
    ["A Giant Dog", "Chatterteeth", "quantumvortex", "Garage Punk", ["Punk"], "a_Giant_Dog_-_Chatterteeth.osz"],
    ["A Giant Dog", "Sex & Drugs", "quantumvortex", "Garage Punk", ["Punk"], "a_Giant_Dog_-_Sex__Drugs.osz"],
    ["All Them Witches", "Tour Death Song", "a bat", "Acid Rock", ["Rock"], "All Them Witches - Tour Death Song.osz"],
    ["American Football", "Stay Home", "mineralwater1", "Midwest Emo", ["Rock"], "American Football - Stay Home.osz"],
    ["American Football", "The Summer Ends", "mineralwater1", "Midwest Emo", ["Rock"], "American Football - The Summer Ends.osz"],
    ["Andreas Waldetoft, Paradox Interactive", "The Crusade Starts", "turffff", "Video Game OST", ["Other"], "Andreas Waldetoft, Paradox Interactive - The Crusade Starts.osz"],
    ["Black Country, New Road", "Concorde", "quantumvortex", "Indie Rock", ["Rock"], "Black Country New Road - Concorde.osz"],
    ["Black Country, New Road", "Sunglasses", "Boden", "Post-Punk", ["Punk"], "Black_Country_New_Road_-_Sunglasses.osz"],
    ["black midi", "Eat Men Eat", "Boden", "Avant-Prog", ["Rock"], "black_midi_-_Eat_Men_Eat.osz"],
    ["black midi", "Hogwash and Balderdash", "Fump", "Brutal Prog", ["Rock"], "black_midi_-_Hogwash_and_Balderdash.osz"],
    ["black midi", "The Defence", "Fump", "Vocal Jazz", ["Jazz"], "black midi - The Defence.osz"],
    ["Blood Incantation", "Vitrification of Blood (Part 1)", "Bonk", "Death Metal", ["Metal"], "Blood Incantation - Vitrification of Blood (Part I).osz"],
    ["Bobby Caldwell", "What You Won't Do for Love", "quantumvortex", "Smooth Soul", ["Other"], "Bobby_Caldwell_-_What_You_Wont_Do_for_Love.osz"],
    ["Bomb the Music Industry!", "Planning My Death", "Fump", "Ska Punk", ["Punk"], "Bomb the Music Industry! - Planning My Death.osz"],
    ["brian david gilbert", "Pumpkin Cowboy", "quantumvortex", "Western", ["Other"], "brian_david_gilbert_-_Pumpkin_Cowboy.osz"],
    ["Cardiacs", "The Leader of the Starry Skies", "a bat", "Progressive Rock", ["Rock"], "Cardiacs - The Leader of the Starry Skies.osz"],
    ["clipping.", "Story 7", "Boden", "Glitch Hop", ["Other"], "clipping._-_Story_7.osz"],
    ["Clouds", "New Amnesia", "Bonk", "Hard Rock", ["Rock"], "Clouds - New Amnesia.osz"],
    ["Dead Kennedys", "Dog Bite", "Fump", "Hardcore Punk", ["Punk"], "Dead_Kennedys_-_Dog_Bite.osz"],
    ["Dismemberment Plan", "Back and Forth", "Boden", "Indie Rock", ["Rock"], "Dismemberment_Plan_-_Back_and_Forth.osz"],
    ["Dvne", "Enuma Elis", "a bat", "Sludge Metal", ["Metal"], "Dvne - Enuma Elis.osz"],
    ["fail better heal faster", "Cyber Corrupt", "quantumvortex", "Midwest Emo", ["Rock"], "fail_better_heal_faster_-_Cyber_Corrupt.osz"],
    ["fail better heal faster", "Human", "quantumvortex", "Midwest Emo", ["Rock"], "fail_better_heal_faster_-_Human.osz"],
    ["Frankie and the Witch Fingers", "Weird Dog", "TVRemote", "Garage Rock", ["Rock"], "Frankie and the Witch Fingers - Weird Dog.osz"],
    ["Funeral Diner", "Syncope", "Bonk", "Screamo", ["Punk"], "Funeral Diner - Syncope.osz"],
    ["Geordie Greep", "Motorbike", "Fump", "Avant-Prog", ["Rock"], "Geordie Greep - Motorbike.osz"],
    ["GilvaSunner", "Epic Flintstones", "quantumvortex", "Mashup", ["Other"], "GiIvaSunner_-_Epic_Flintstones.osz"],
    ["glass beach", "commatose", "dilf enjoyer", "Progressive Rock", ["Rock"], "glass beach - commatose.osz"],
    ["Jeff Rosenstock", "Bang On The Door", "Fump", "Pop Punk", ["Pop", "Punk"], "Jeff Rosenstock - Bang On The Door.osz"],
    ["Jeff Rosenstock", "FUTURE IS DUMB", "Boden", "Pop Punk", ["Pop", "Punk"], "Jeff Rosenstock - FUTURE IS DUMB.osz"],
    ["Jeff Rosenstock", "HEAD", "Boden", "Skate Punk", ["Punk"], "Jeff Rosenstock - HEAD.osz"],
    ["Jeff Rosenstock", "I WANNA BE WRONG", "Boden", "Pop Punk", ["Pop", "Punk"], "Jeff_Rosenstock_-_I_WANNA_BE_WRONG.osz"],
    ["Jeff Rosenstock", "WIILL U STILL U", "Boden", "Pop Punk", ["Pop", "Punk"], "Jeff_Rosenstock_-_WILL_U_STILL_U.osz"],
    ["John Larkin", "The Misfit", "Boden", "Vocal Jazz", ["Jazz"], "John_Larkin_-_The_Misfit.osz"],
    ["JPEGMAFIA & Danny Brown", "Fentanyl Tester", "Boden", "Experimental Hip-Hop", ["Other"], "JPEGMAFIA_Danny_Brown_-_Fentanyl_Tester.osz"],
    ["Last Days Of Humanity", "Wet Remains", "Fump", "Goregrind", ["Other"], "Last Days Of Humanity - Wet Remains.osz"],
    ["LINGUA IGNOTA", "SPITE ALONE HOLDS ME ALOFT", "a bat", "Neoclassical Darkwave", ["Other"], "LINGUA IGNOTA - SPITE ALONE HOLDS ME ALOFT.osz"],
    ["King Gizzard & The Lizard Wizard", "Automation", "TVRemote", "Psychedelic Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Automation.osz"],
    ["King Gizzard & The Lizard Wizard", "Cellophane", "Fump", "Psychedelick Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Cellophane.osz"],
    ["King Gizzard & The Lizard Wizard", "Evil Death Roll", "TVRemote", "Psychedelic Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Evil Death Roll.osz"],
    ["King Gizzard & The Lizard Wizard", "Gliese 710", "TVRemote", "Jazz-Rock", ["Jazz", "Rock"], "King Gizzard & The Lizard Wizard - Gliese 710.osz"],
    ["King Gizzard & The Lizard Wizard", "Her & I (Slow Jam II)", "turffff", "Psychedelic Rock", ["Rock"], "King Gizzard & The Lizard Wizard - Her & I (Slow Jam II).osz"],
    ["King Gizzard & The Lizard Wizard", "Lunch Meat", "Fump", "Garage Punk", ["Punk"], "King_Gizzard__The_Lizard_Wizard_-_Lunch_Meat.osz"],
    ["King Gizzard & The Lizard Wizard", "Organ Farmer", "Boden", "Thrash Metal", ["Metal"], "King Gizzard & The Lizard Wizard - Organ Farmer.osz"],
    ["King Gizzard & The Lizard Wizard", "The Book", "Boden", "Psychedelic Rock", ["Rock"], "King_Gizzard__The_Lizard_Wizard_-_The_Book.osz"],
    ["King Gizzard & The Lizard Wizard", "Trapdoor", "turffff & Boden", "Psychedelic Pop", ["Pop"], "King Gizzard & The Lizard Wizard - Trapdoor.osz"],
    ["King Gizzard & The Lizard Wizard", "Vegemite", "Fump", "Psychedelic Pop", ["Pop"], "King_Gizzard__The_Lizard_Wizard_-_Vegemite.osz"],
    ["LemKuuja", "What's a Future Funk", "turffff", "Future Funk", ["Other"], "LemKuuja - Whats a Future Funk.osz"],
    ["Leningrad", "Den' vyborov", "dopaminos", "Rock", ["Rock"], "c936mr.osz"],
    ["Meat Wave", "Brother", "quantumvortex", "Garage Punk", ["Punk"], "Meat_Wave_-_Brother.osz"],
    ["Michael Giacchino", "It's Finn McMissile!", "a bat", "Film Soundtrack", ["Other"], "Michael Giacchino - It_s Finn McMissile!.osz"],
    ["Moon Tooth", "White Stag", "a bat", "Post-Metal", ["Metal"], "Moon_Tooth_-_White_Stag.osz"],
    ["Mr. Bungle", "Pink Cigarette", "a bat", "Art Rock", ["Rock"], "Mr._Bungle_-_Pink_Cigarette.osz"],
    ["NoMeansNo", "It's Catching Up", "Boden", "Post-Hardcore", ["Punk"], "NoMeansNo_-_Its_Catching_Up.osz"],
    ["NoMeansNo", "Tired Of Waiting", "Boden", "Post-Hardcore", ["Punk"], "NoMeansNo - Tired Of Waiting.osz"],
    ["Nuclear Assault", "Critical Mass", "itzKira811", "Rock", ["Rock"], "Nuclear Assault - Critical Mass.osz"],
    ["Phineas And Ferb-Tones", "Glitchee Glitchee Goo! (Extended)", "dopaminos", "Rock", ["Rock"], "q2jx2v.osz"],
    ["Pianos Become The Teeth", "Ripple Water Shine", "quantumvortex", "Emo", ["Rock"], "Pianos_Become_The_Teeth_-_Ripple_Water_Shine.osz"],
    ["Radiohead", "Climbing Up The Walls", "a bat", "Art Rock", ["Rock"], "Radiohead - Climbing Up The Walls.osz"],
    ["Radiohead", "Exit Music (For A Film)", "turffff", "Art Rock", ["Rock"], "Radiohead - Exit Music (For A Film).osz"],
    ["Radiohead", "Weird Fishes Arpeggi", "turffff", "Art Rock", ["Rock"], "Radiohead - Weird Fishes Arpeggi.osz"],
    ["Ride", "Seagull", "Boden", "Shoegaze", ["Rock"], "Ride_-_Seagull.osz"],
    ["Snooper", "Powerball", "Boden", "Garage Punk", ["Punk"], "Snooper_-_Powerball.osz"],
    ["Sum 41", "Walking Disaster", "Shameimaru", "Rock", ["Rock"], "Sum 41 - Walking Disaster.osz"],
    ["Sweet Trip", "Where the Sunrise Dies, So Does the Echo of Your Voice", "quantumvortex", "Dream Pop", ["Pop"], "Sweet_Trip_-_Where_the_Sunrise_Dies_So_Does_the_Echo_of_Your_Voice.osz"],
    ["Swing Kids", "El Camino Car Crash", "a bat", "Screamo", ["Punk"], "Swing_Kids_-_El_Camino_Car_Crash.osz"],
    ["Starkweather", "Taming Leeches With Fire", "Bonk", "Metalcore", ["Metal"], "Starkweather - Taming Leeches With Fire.osz"],
    ["The Brave Little Abacus", "45 Minutes from Somewhere Out There", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - 45 Minutes from Somewhere Out There.osz"],
    ["The Brave Little Abacus", "A highway got paved over my future, I drive it getting to school.", "Fump", "Math Rock", ["Rock"], "The_Brave_Little_Abacus_-_A_highway_got_paved_over_my_future_I_drive_it_getting_to_school..osz"],
    ["The Brave Little Abacus", "A Map of the Stars", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - a map of the stars.osz"],
    ["The Brave Little Abacus", "But I Won't Always Be on the Receiving End", "dilf enjoyer", "Experimental Rock", ["Rock"], "The Brave Little Abacus - but I won_t always be on the recieving end!.osz"],
    ["The Brave Little Abacus", "Che Guevara Didn't Wear His Own T-Shirts", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - Che Guevara didn_t wear his own t-shirts.osz"],
    ["The Brave Little Abacus", "El Capitano", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - El Capitano.osz"],
    ["The Brave Little Abacus", "I See It Too.", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - I see it too..osz"],
    ["The Brave Little Abacus", "Imaginary Peaks, Imaginary Beasts", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - Imaginary Peaks, Imaginary Beasts.osz"],
    ["The Brave Little Abacus", "Introducing Morrissey (Ergs! Cover)", "dilf enjoyer", "Pop Punk", ["Pop", "Punk"], "The Brave Little Abacus - Introducing Morrissey (Ergs! Cover).osz"],
    ["The Brave Little Abacus", "The Blah Blah Blahs", "dilf enjoyer", "Post-Hardcore", ["Punk"], "The Brave Little Abacus - The Blah Blah Blahs.osz"],
    ["The Brave Little Abacus", "The Buffalo", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - The Buffalo.osz"],
    ["The Brave Little Abacus", "Waiting For Your Return, Like Running Backwards", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - waiting for your return, like running backwards.osz"],
    ["The Brave Little Abacus", "You're Not Me But Neither Am I", "dilf enjoyer", "Midwest Emo", ["Rock"], "The Brave Little Abacus - You_re Not Me But Neither Am I.osz"],
    ["The Crazy World of Arthur Brown", "Fire", "a bat", "Psychedelic Rock", ["Rock"], "The_Crazy_World_of_Arthur_Brown_-_Fire.osz"],
    ["The Drones", "Shark Fin Blues", "a bat", "Punk Blues", ["Punk"], "The Drones - Shark Fin Blues.osz"],
    ["The Drones", "Why Write A Letter That You'll Never Send", "a bat", "Art Rock", ["Rock"], "The Drones - Why Write A Letter That You_ll Never Send.osz"],
    ["The Flaming Lips", "The Spark That Bled", "Boden", "Neo-Psychedelia", ["Rock"], "The Flaming Lips - The Spark That Bled.osz"],
    ["Tool", "Forty Six & 2", "turffff", "Alternative Metal", ["Metal"], "TOOL - Forty Six & 2.osz"],
    ["Totorro", "Home Alone", "Boden", "Math Rock", ["Rock"], "Totorro - Home Alone.osz"],
    ["Tristan Tzara", "Anatomies", "Fump", "Screamo", ["Punk"], "Tristan Tzara - Anatomies.osz"],
    ["Tropical Fuck Storm", "You Let My Tyres Down", "a bat", "Punk Blues", ["Punk"], "Tropical_Fuck_Storm_-_You_Let_My_Tyres_Down.osz"],
    ["Uchu Nekoko", "Film", "quantumvortex", "Ambient", ["Other"], "Uchu_Nekoko_-_Film.osz"],
    ["Underoath", "Giving Up Hurts the Most", "Bonk", "Metalcore", ["Metal"], "Underoath - Giving Up Hurts the Most.osz"],
    ["Unknown Artist", "Jail Theme (LEGO Island)", "dopaminos", "Video Game OST", ["Other"], "b795iu.osz"],
    ["Ween", "Stroker Ace", "a bat", "Speed Metal", ["Metal"], "Ween_-_Stroker_Ace.osz"],
    ["Wilco", "I am trying to break your heart", "Boden", "Art Rock", ["Rock"], "Wilco_-_I_am_trying_to_break_your_heart.osz"],
    ["Wire", "The Commercial", "Fump", "Punk Rock", ["Punk", "Rock"], "Wire - The Commercial.osz"],
    ["Worst Party Ever", "Provenance", "quantumvortex", "Emo-Pop", ["Pop", "Rock"], "Worst_Party_Ever_-_Provenance.osz"],
    ["XTC", "Senses Working Overtime", "dilf enjoyer", "Jangle Pop", ["Pop"], "XTC - Senses Working Overtime.osz"],
    ["Yakushimaru Etsuko", "Venus & Jesus", "dopaminos", "J-Pop", ["Pop"], "Yakushimaru Etsuko - Venus & Jesus.osz"],
    ["Yes", "Close to the Edge", "Boden", "Symphonic Prog", ["Rock"], "Yes - Close To The Edge.osz"],
    ["Zemfira", "bryzgi", "itzKira811", "Indie Rock", ["Rock"], "i1qtqo.osz"],
    ["Zao", "Savannah", "Bonk", "Metalcore", ["Metal"], "Zao - Savannah.osz"]
];

for (let i = 0; i < genres.length; i++) {
    let newItem = document.createElement("option");
    
    newItem.value = genres[i];
    newItem.innerHTML = genres[i];

    genreList.appendChild(newItem);
}

var clearTable = function() {
    let rows = [...list.getElementsByTagName("tr")];

    for (let i = 0; i < rows.length; i++) {
        list.removeChild(rows[i]);
    }
}

var createHeader = function() {
    let headerRow = document.createElement("tr");

    for (let i = 0; i < header.length; i++) {
        let newCell = document.createElement("td");
        newCell.innerHTML = header[i];
        newCell.style.fontFamily = "Torus-Bold";
        headerRow.appendChild(newCell);
    }

    list.appendChild(headerRow);
}

var addAll = function() {
    clearTable();
    createHeader();

    for (let i = 0; i < collection.length; i++) {
        let newRow = document.createElement("tr");

        for (let j = 0; j < 6; j++) {
            if (j < 4) {
                let newCell = document.createElement("td");
                newCell.innerHTML = collection[i][j];
                newRow.appendChild(newCell);
            } else {
                if (j == 5) {
                    let newCell = document.createElement("td");
                    newCell.innerHTML = "<a href='./osz/" + collection[i][j] + "'>Download</a>";
                    newRow.appendChild(newCell);
                }
            }
        }

        list.appendChild(newRow);
    }
}

var addOnly = function(genre) {
    clearTable();
    createHeader();

    for (let i = 0; i < collection.length; i++) {
        if (collection[i][4].includes(genre)) {
            let newRow = document.createElement("tr");

            for (let j = 0; j < 6; j++) {
                if (j < 4) {
                    let newCell = document.createElement("td");
                    newCell.innerHTML = collection[i][j];
                    newRow.appendChild(newCell);
                } else {
                    if (j == 5) {
                        let newCell = document.createElement("td");
                        newCell.innerHTML = "<a href='./osz/" + collection[i][j] + "'>Download</a>";
                        newRow.appendChild(newCell);
                    }
                }
            }

            list.appendChild(newRow);
        }
    }
}

var determineAdd = function() {
    if (genreList.value == "All") {
        addAll();
    } else {
        addOnly(genreList.value);
    }
}

addAll();

sortButton.addEventListener("click", determineAdd);
