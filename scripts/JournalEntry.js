export const JournalEntryComponent = (entry) => {
    return `
        <section id="entryLog" class="journalEntry">
            <p>Date: ${journal.date}</p>
            <p>Concept: ${journal.concept}</p>
            <p>Entry: ${journal.entry}</p>
            <p>Mood: ${journal.mood}</p>
        </section>
    `
}