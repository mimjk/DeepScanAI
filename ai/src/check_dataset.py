from src.dataset.dataset import train_dataset

print("Total Training Images :", len(train_dataset))

print("Classes :", train_dataset.classes)

print("Class Mapping :", train_dataset.class_to_idx)