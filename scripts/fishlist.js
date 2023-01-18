// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = ''
       
    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string? A: So that it iterates through each returned fish object and its properties
        htmlString += `<section class="fish-object">
            <hgroup class="fish-name">${fish.name}</hgroup>
            <div><img  class="fish-photo" src="${fish.image}"; height=100px; width=200px/></div>
            <ul class="fish-list-facts">
                <li class="fish__species"> Species: ${fish.species}</li>
                <li class="fish__length"> Inches: ${fish.length}</li>
                <li class="fish__location">Origin: ${fish.origin}</li>
                <li class="fish__diet"> Preferred Diet: ${fish.food}</li>
            </ul>
         </section>
`
    }

    return htmlString
}
