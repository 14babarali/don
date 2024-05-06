import MedicalRequest from '../models/copyMatchingData.js';

const copyData = async (req, res) => {
  try {
    await MedicalRequest.copyMatchingData();
    return res.status(200).json({ message: "Data copied successfully" });
  } catch (error) {
    console.error("Error copying data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export { copyData };
