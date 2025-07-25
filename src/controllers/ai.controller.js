// src/controllers/ai.controller.js


// import generateContent from '../services/ai.service.js';

// export const getReview = async (req, res) => {
   
//     const { code } = req.body.code;


//     try {
//     const code = req.query.prompt;
//     res.status(200).send(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error generating AI response');
//   }
// };








import generateContent from "../services/ai.service.js";

export const getReview = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Missing code in request body" });
  }

  try {
    const result = await generateContent(code);
    res.status(200).send(result);
  } catch (err) {
    console.error("AI error:", err);
    res.status(500).send("Error generating AI response");
  }
};
