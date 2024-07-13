# Rizer: Article Summarizer

![Rizer homepage.](/static/rizer.jpg)

Rizer is a web application that summarizes articles. Users can paste their articles into a text area, click a button, and receive a concise summary of their content.



## Technologies Used

- Flask (Python web framework)
- HTML, CSS, and JavaScript
- Google Fonts for typography
- Fetch API for client-server communication

## Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.x
- Flask
- A web browser (Chrome, Firefox, etc.)

## Getting Started

Follow these instructions to set up Rizer on your local machine.

### 1. Clone the Repository

You can clone the project locally by using the following command. Or download and extract the zip file.
```sh
git clone https://github.com/Nothingspecial99/rizer.git
```

### 2. Create a virtual environment.

Make sure that you've python installed in your system. Open the terminal in the project folder and run the following command to create a virtual enviroment.

```sh
python -m venv venv
```

To activate the virtual environment:

```sh
venv\Scripts\activate
```

And finally install the required dependencies by running the following command:

```sh
pip install -r requirements.txt
```

### 3. Generate Gemini API key

Go to [Gemini Aistudio](https://aistudio.google.com/app/) and click on _Get API KEY_ button. Paste this API key on the eighth line of _app.py_ file. Make sure that the API key is within the quotes like this:

```py
apiKey = "Your API Key"
```

### 4. Run!

Now, open up the terminal execute the _app.py_ file like this:

```sh
python app.py
```

Open your browser and go to [127.0.0:5000](http://127.0.0.1:5000/) to see the project running!!!

