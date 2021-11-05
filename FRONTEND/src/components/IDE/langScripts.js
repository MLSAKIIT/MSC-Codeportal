const cplusplusCode = `
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	return 0;
}
`;

const cCode = `
#include <stdio.h>

int main(void) {
	// your code goes here
	return 0;
}
`;

const javaCode = `
import java.util.Scanner;

public class Qode {

    public static void main(String[] args) {

        //your code goes here
    }
}
`;

const pythonCode = `
# your code goes here
`;

const files = {
  "cplusplus.cpp": {
    name: "C++",
    language: "cpp",
    languageCode: "cpp14",
    value: cplusplusCode
  },
  "c.c": {
    name: "C",
    language: "c",
    languageCode: "c",
    value: cCode
  },
  "java.java": {
    name: "JAVA",
    language: "java",
    languageCode: "java",
    value: javaCode
  },
  "python.py": {
    name: "PYTHON",
    language: "python",
    languageCode: "python3",
    value: pythonCode
  }
};

export default files;
