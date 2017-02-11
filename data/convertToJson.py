import pandas as pd
import glob
import json

all_files = glob.glob("*.xlsx")
data_dict = []

for file_ in all_files:
    data_dict +=  pd.read_excel(file_).fillna("").to_dict(orient = 'records')
    print data_dict

# data.xlsx > Python converts to json > python saves Json as json file
file = open('data.json', 'w')
file.write(json.dumps(data_dict))

file = open('data.js', 'w')
file.write("all_data = " + json.dumps(data_dict))

file.close()