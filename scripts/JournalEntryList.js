/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// // DOM reference to where all entries will be rendered
// const entryLog = document.querySelector("#entryLog")

// export const EntryListComponent = () => {
//     // Use the journal entry data from the data provider component
//     const entries = useJournalEntries()

//     for (const entry of entries) {
//         /*
//             Invoke the component that returns an
//             HTML representation of a single entry
//         */

//         // is this suppose to be entry instead?
//         entryLog.innerHTML += JournalEntryComponent()
//     }
// }

const buildJournalEntryContainerHTML = (arrayOfEntries) => {
    let entryHTMLRepresentations = ""
    for (const entry of entries) {
        entryHTMLRepresentations += JournalEntry(entry)
    }
    return entryHTMLRepresentations
}

const useJournalEntriesGroup = useJournalEntries()
console.log(useJournalEntriesGroup)

const journalEntryHTML = buildJournalEntryContainerHTML(useJournalEntriesGroup)
console.log(journalEntryHTML)

export const JournalEntryList = () => {
    const contentElement = document.querySelector(".form")

    contentElement.innerHTML += `
    <div class="entryGroup">${journalEntryHTML}
    </div>`
}