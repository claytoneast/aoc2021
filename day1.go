package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

func main() {
	bytes, err := ioutil.ReadFile("day1_input")
	if err != nil {
		fmt.Printf("---- err: %d", err)
	}
	str := string(bytes)
	str = strings.TrimSuffix(str, "\n")
	splitted := strings.Split(str, "\n")
	numbers := make([]int, len(splitted))
	for i, val := range splitted {
		var int, err = strconv.Atoi(val)
		if err != nil {
			fmt.Printf("---- err: %d", err)
		}
		numbers[i] = int
	}

	if len(splitted) != len(numbers) {
		panic("yee")
	}

	timesValsIncreased := 0
	for i, val := range numbers {
		if i > 0 {
			prevVal := numbers[i - 1]
			if val > prevVal {
				timesValsIncreased++
			}
		}
	}

	fmt.Printf("---- timesValsIncreased: %d\n", timesValsIncreased)
}
