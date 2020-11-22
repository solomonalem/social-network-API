const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');


// /api/Thoughts/
router
.route('/')
.get(getAllThought);




// /api/Thoughts/
router
.route('/')
.post(addThought);

// /api/Thoughts/<userId>
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// =======================================================

// /api/Thoughts/<ThoughtId>/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);


// /api/Thoughts/<ThoughtId>/reactions/<reactionId>

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value