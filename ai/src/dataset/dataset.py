from torchvision import datasets
from torchvision import transforms

from src.config import (
    TRAIN_DIR,
    TEST_DIR,
    IMAGE_SIZE,
)


train_transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor(),
])


test_transform = transforms.Compose([
    transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
    transforms.ToTensor(),
])


train_dataset = datasets.ImageFolder(
    root=TRAIN_DIR,
    transform=train_transform,
)


test_dataset = datasets.ImageFolder(
    root=TEST_DIR,
    transform=test_transform,
)