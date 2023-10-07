import numpy as np
# Define the sigmoid activation function
def sigmoid(x):
 return 1 / (1 + np.exp(-x))
# Define the derivative of the sigmoid function
def sigmoid_derivative(x):
 return x * (1 - x)
# Define the neural network architecture
input_size = 2
hidden_size = 2
output_size = 1
# Initialize random weights and biases
np.random.seed(1)
weights_input_hidden = np.random.uniform(size=(input_size, hidden_size))
bias_hidden = np.zeros((1, hidden_size))
weights_hidden_output = np.random.uniform(size=(hidden_size, output_size))
bias_output = np.zeros((1, output_size))
# Define the learning rate
learning_rate = 0.1
# Training data
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])
# Training loop
 
epochs = 10000
for epoch in range(epochs):
 # Forward propagation
 hidden_layer_input = np.dot(X, weights_input_hidden) + bias_hidden
 hidden_layer_output = sigmoid(hidden_layer_input)
 output_layer_input = np.dot(hidden_layer_output, weights_hidden_output) + bias_output
 predicted_output = sigmoid(output_layer_input)
 
 # Calculate the error
 error = y - predicted_output
 
 # Backpropagation
 d_output = error * sigmoid_derivative(predicted_output)
 error_hidden = d_output.dot(weights_hidden_output.T)
 d_hidden = error_hidden * sigmoid_derivative(hidden_layer_output)
 
 # Update weights and biases
 weights_hidden_output += hidden_layer_output.T.dot(d_output) * learning_rate
 bias_output += np.sum(d_output, axis=0, keepdims=True) * learning_rate
 weights_input_hidden += X.T.dot(d_hidden) * learning_rate
 bias_hidden += np.sum(d_hidden, axis=0, keepdims=True) * learning_rate
# Testing the trained network
test_input = X
hidden_layer_input = np.dot(test_input, weights_input_hidden) + bias_hidden
hidden_layer_output = sigmoid(hidden_layer_input)
output_layer_input = np.dot(hidden_layer_output, weights_hidden_output) + bias_output
predicted_output = sigmoid(output_layer_input)
for i in range(len(test_input)):
 print(f"Input: {test_input[i]}, Predicted Output: {int(predicted_output[i] >= 0.5)}")