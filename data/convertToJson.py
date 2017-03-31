import pandas as pd
import glob
import json

all_files = glob.glob("*.xlsx")
data_dict = []

for file_ in all_files:
    data_frame = pd.read_excel(file_).fillna("")
    filter = data_frame["PROJECT ADDRESS"] != ""
    dfNew = data_frame[filter]
    data_dict += dfNew.to_dict(orient = 'records')

    print data_dict

# data.xlsx > Python converts to json > python saves Json as json file
file = open('data.js', 'w')
file.write("all_data = " + json.dumps(data_dict))

file.close()