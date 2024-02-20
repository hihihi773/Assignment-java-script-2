// JavaScript 
// Define arrays for each part of the story
const storyParts = {
    nouns: ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'],
    actions: ['sat on', 'ate', 'danced with', 'saw', 'do not like', 'kissed'],
    adjectives: ['a funny', 'a scary', 'a gooky', 'a slimy', 'a barking', 'a fat'],
    objects: ['monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
    places: ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes']
};

let currentSelection = {
    noun: 0,
    action: 0,
    adjective: 0,
    object: 0,
    place: 0
};

// Update the text on the buttons to reflect the current part of the story
function updateButtons() {
    for (const part in currentSelection) {
        const button = document.getElementById(`${part}-button`);
        button.textContent = storyParts[`${part}s`][currentSelection[part]];
    }
}

// Event listeners for the story part buttons
function setupButtonListeners() {
    for (const part in currentSelection) {
        const button = document.getElementById(`${part}-button`);
        button.addEventListener('click', function() {
            currentSelection[part] = (currentSelection[part] + 1) % storyParts[`${part}s`].length;
            updateButtons();
        });
    }
}

// Create the complete story
function createCompleteStory() {
    const story = `${storyParts.nouns[currentSelection.noun]} ` +
                  `${storyParts.actions[currentSelection.action]} ` +
                  `${storyParts.adjectives[currentSelection.adjective]} ` +
                  `${storyParts.objects[currentSelection.object]} ` +
                  `${storyParts.places[currentSelection.place]}.`;
    document.getElementById('story-display').textContent = story;
}

// Add event listener to the 'Tell Story' button
function setupStoryButtonListener() {
    const button = document.getElementById('tell-story-button');
    button.addEventListener('click', createCompleteStory);
}

// Call the functions to set up the event listeners
setupButtonListeners();
setupStoryButtonListener();
updateButtons();  // Set initial button text
