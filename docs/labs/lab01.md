# Lab 01 - The Fundamentals of C++

## Experiencing Compile-Time Errors

Even a small spelling error or missing symbol can cause a variety of errors at compile time, which may confuse or mislead you. These error messages, while intended to be helpful, are not always written with the beginner in mind. So, they may contain language that is confusing or scary. 

In this lab, you will deliberately cause several errors and read the error messages they generate.

Copy the following program exactly as shown:

1. Create a new source file called `errors.cpp`, and copy the following source code exactly as shown:
    ```cpp
    #include <iostream>

    int main() 
        double enterprise = 17.01;
        double discovery = 10.31;

        std::cout << "enterprise: " << enterprise << std::endl;
        std::cout << "discovery: " << discovery << std::endl;
        return 0;
    }
    ```

1. Attempt to compile the source code. The compiler should have generated several errors. How many errors occurred? 
1. When faced with a great many error messages at once, it helps to focus on the first one that's reported since fixing it may fix some (or all) of the others. What does the first error message say? From that error message, what do you think would fix it? 
1. Add `{` after `int main()` and attempt the compilation again. How many errors occurred? 
1. Remove the `#include <iostream>` directive and attempt to compile the source code. How many errors occurred?
1. Add back the deleted `#include` directive.
1. Remove the `()` after `main` and attempt to compile the source code. How many errors occurred?
