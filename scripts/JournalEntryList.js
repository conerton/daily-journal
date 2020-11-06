/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"



export const JournalEntryList = () => {

    const contentElement = document.querySelector("#entryLog")

    const journals = useJournalEntries()

    let journalHTMLRepresentations = ""

    for (const journal of journals ) {
        journalHTMLRepresentations += JournalEntryComponent(journal)
    }

    contentElement.innerHTML += 
    `
    <section>
    <div class="logged">${journalHTMLRepresentations}</div>
    </section>
    `
}










// const buildJournalEntryContainerHTML = (arrayOfEntries) => {

//     let entryHTMLRepresentations = ""
//     for (const entry of entries) {
//         entryHTMLRepresentations += JournalEntry(entry)
//     }
//     return entryHTMLRepresentations
// }

// const useJournalEntriesGroup = useJournalEntries()
// console.log(useJournalEntriesGroup)

// const journalEntryHTML = buildJournalEntryContainerHTML(useJournalEntriesGroup)
// console.log(journalEntryHTML)

// export const JournalEntryList = () => {
//     const contentElement = document.querySelector(".form")

//     contentElement.innerHTML += `
//     <div class="entryGroup">${journalEntryHTML}
//     </div>`
// }