from pathlib import Path
import torch

# ==========================
# Project Paths
# ==========================

BASE_DIR = Path(__file__).resolve().parent.parent

DATASET_DIR = BASE_DIR / "datasets" / "cifake"

TRAIN_DIR = DATASET_DIR / "train"

TEST_DIR = DATASET_DIR / "test"

MODEL_SAVE_DIR = BASE_DIR / "saved_models"

# ==========================
# Image Settings
# ==========================

IMAGE_SIZE = 224

# ==========================
# Training Settings
# ==========================

BATCH_SIZE = 16

NUM_WORKERS = 2

EPOCHS = 10

LEARNING_RATE = 0.0001

# ==========================
# Device
# ==========================

DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# ==========================
# Classes
# ==========================

CLASS_NAMES = ["FAKE", "REAL"]

NUM_CLASSES = len(CLASS_NAMES)