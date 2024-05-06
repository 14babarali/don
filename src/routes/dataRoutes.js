router.get('/patient/yes-responses', async (req, res) => {
  const formData = await FormData.find({ responseStatus: "yes" });
  res.json(formData);
});

router.get('/patient/yes-responses', async (req, res) => {
  const formData = await FormData.find({ responseStatus: "yes" });
  res.json(formData);
});

router.get('/admin/all-responses', async (req, res) => {
  const formData = await FormData.find();
  res.json(formData);
});

router.get('/admin/yes-responses', async (req, res) => {
  const formData = await FormData.find({ responseStatus: "yes" });
  res.json(formData);
})


router.get('/admin/no-responses', async (req, res) => {
  const formData = await FormData.find({ responseStatus: "no" });
  res.json(formData);
});

