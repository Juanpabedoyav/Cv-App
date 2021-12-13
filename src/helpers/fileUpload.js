export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dv08oqgvx/upload";
  const formData = new FormData();
  formData.append("upload_preset", "UserCvApp");
  formData.append("file", file);

  const resp = await fetch(cloudUrl, {
    method: "POST",
    body: formData,
  });
  const cloudResp = await resp.json();

  return cloudResp.secure_url;
};
