const apiKey: string | undefined = import.meta.env.VITE_NASA_API_KEY;

export type Apod = {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  /* TODO: add remaining properties */
};

export async function fetchApodByDate(dateIso: string) {
  if (!apiKey) {
    throw new Error(
      'Please provide a NASA Open API key in your .env.local file'
    );
  }

  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateIso}`
  );

  return response.json();
}
