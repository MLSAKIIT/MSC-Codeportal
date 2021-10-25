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
    name: "cplusplus.cpp",
    language: "cpp",
    languageCode: "cpp14",
    value: cplusplusCode
  },
  "c.c": {
    name: "c.c",
    language: "c",
    languageCode: "c",
    value: cCode
  },
  "java.java": {
    name: "java.java",
    language: "java",
    languageCode: "java",
    value: javaCode
  },
  "python.py": {
    name: "python.py",
    language: "python",
    languageCode: "python3",
    value: pythonCode
  }
};

export default files;
