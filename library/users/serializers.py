from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Users


class UsersModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ("url", "first_name", "last_name", "birthday_year", "email")
