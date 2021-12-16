// More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/yxgKVfY-J/";

    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);
        predict();
    }

    async function loop() {
        await predict();
    }

    // run the webcam image through the image model
    async function predict() {

        const predictions = await model.predict(
            document.getElementById("preview")
          );
          
          //busca o maior valor probabilistico da classificação de uma imagem
          var max = predictions.reduce(function (prev, current) {
            return prev.probability > current.probability ? prev : current;
          });

          document.getElementById("label-container").innerHTML = max.className;
          console.log(max.className);
    }