type Image = {
  id: number;
  url: string;
  description: string | null;
};

// Here we will refactor a function so that it uses async/await and
// it no longer needs a mocked server to run the tests.

// 1. Refactor this function to use async/await
// 2. (Optional) Let's assume you would like to refactor this function
//    into multiple functions so that you would not need to test the
//    fetch call. How would you do that?
export default async function fetchImages(): Promise<Image[]> {
  const response = await fetch('https://some-api.com/images');
  const images: Image[] = await response.json();
  return images.map(image => {
    if (!image.description) return image;
    return {
      ...image,
      description: image.description
        .replace(/[^\w\s]/g, '')
        .replace(/\s\s+/g, ' ')
        .trim(),
    };
  });
}
