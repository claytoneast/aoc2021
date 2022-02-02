package main

import (
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"strconv"
	"strings"
)

func day1() error {
	bytes, err := ioutil.ReadFile("day1_input")
	if err != nil {
		return err
	}

	str := string(bytes)
	str = strings.TrimSuffix(str, "\n")
	splitted := strings.Split(str, "\n")
	numbers := []int{}
	for _, val := range splitted {
		int, err := strconv.Atoi(val)
		if err != nil {
			return err
		}
		numbers = append(numbers, int)
	}

	if len(splitted) != len(numbers) {
		return errors.New("splitted != numbers")
	}

	timesValsIncreased := 0
	for i, val := range numbers {
		if i == 0 { continue }

		prevVal := numbers[i - 1]
		if val > prevVal {
			timesValsIncreased++
		}
	}

	fmt.Printf("---- timesValsIncreased: %d\n", timesValsIncreased)
	return nil
}

func main() {
	err := day1()
	if err != nil {
		log.Fatalf("---- err: %v\n", err)
	}
}
